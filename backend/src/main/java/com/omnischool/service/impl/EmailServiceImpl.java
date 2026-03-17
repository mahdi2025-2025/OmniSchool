package com.omnischool.service.impl;

import com.omnischool.entity.ContactMessage;
import com.omnischool.entity.DemoRequest;
import com.omnischool.enums.DemoStatus;
import com.omnischool.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * Simple HTML mail sender.
 */
@Service
public class EmailServiceImpl implements EmailService {

    private static final String ADMIN_EMAIL = "admin@omnischool.tn";

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Async
    @Override
    public void sendDemoRequestConfirmation(DemoRequest request) {
        String subject = "OmniSchool | Demo request received";
        String body = """
                <div style='font-family:Arial,sans-serif'>
                  <h2>Thank you, %s</h2>
                  <p>We received your demo request for <b>%s</b>.</p>
                  <p>Our team will contact you shortly.</p>
                  <hr/>
                  <p style='font-size:12px;color:#666'>OmniSchool (Tunisia)</p>
                </div>
                """.formatted(escape(request.getFullName()), escape(request.getSchoolName()));
        safeSend(request.getEmail(), subject, body);
    }

    @Async
    @Override
    public void sendAdminNotification(DemoRequest request) {
        String subject = "OmniSchool | New demo request";
        String body = """
                <div style='font-family:Arial,sans-serif'>
                  <h2>New demo request</h2>
                  <p><b>Name:</b> %s</p>
                  <p><b>Email:</b> %s</p>
                  <p><b>Phone:</b> %s</p>
                  <p><b>School:</b> %s (%s)</p>
                  <p><b>Students:</b> %s</p>
                  <p><b>Message:</b> %s</p>
                </div>
                """.formatted(
                escape(request.getFullName()),
                escape(request.getEmail()),
                escape(request.getPhone()),
                escape(request.getSchoolName()),
                request.getSchoolType() == null ? "" : request.getSchoolType().name(),
                request.getNumberOfStudents() == null ? "" : request.getNumberOfStudents(),
                escape(request.getMessage())
        );
        safeSend(ADMIN_EMAIL, subject, body);
    }

    @Async
    @Override
    public void sendContactConfirmation(ContactMessage message) {
        String subject = "OmniSchool | We received your message";
        String body = """
                <div style='font-family:Arial,sans-serif'>
                  <h2>Thank you, %s</h2>
                  <p>We received your message about: <b>%s</b>.</p>
                  <p>We will reply as soon as possible.</p>
                </div>
                """.formatted(escape(message.getName()), escape(message.getSubject()));
        safeSend(message.getEmail(), subject, body);
    }

    @Async
    @Override
    public void sendDemoStatusUpdateNotification(DemoRequest request, DemoStatus oldStatus, DemoStatus newStatus) {
        String subject = "OmniSchool | Demo request update";
        String body = """
                <div style='font-family:Arial,sans-serif'>
                  <h2>Hello, %s</h2>
                  <p>Your demo request status changed from <b>%s</b> to <b>%s</b>.</p>
                  <p>School: <b>%s</b></p>
                </div>
                """.formatted(
                escape(request.getFullName()),
                oldStatus == null ? "" : oldStatus.name(),
                newStatus == null ? "" : newStatus.name(),
                escape(request.getSchoolName())
        );
        safeSend(request.getEmail(), subject, body);
    }

    private void safeSend(String to, String subject, String htmlBody) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);
            mailSender.send(mimeMessage);
        } catch (MessagingException ex) {
            // Intentionally swallow to avoid failing business flow due to mail issues.
        }
    }

    private static String escape(String s) {
        if (s == null) return "";
        return s.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;");
    }
}

