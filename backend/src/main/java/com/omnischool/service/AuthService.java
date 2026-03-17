package com.omnischool.service;

import com.omnischool.dto.LoginRequest;
import com.omnischool.dto.LoginResponse;
import com.omnischool.dto.RefreshTokenResponse;

public interface AuthService {
    LoginResponse login(LoginRequest request);

    RefreshTokenResponse refreshToken(String refreshToken);
}

