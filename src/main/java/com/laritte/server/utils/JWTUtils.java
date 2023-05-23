/**
 * FileName: JWTUtils
 * Author: Laritte
 * Date: 2023/4/29 14:23:19
 * Description:
 * Version: 1.0.0
 */
package com.laritte.server.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JWTUtils {
	// 7 days
	private static long expire = 604800;
	private static String secret = "laritte";

	public static String generateToken(String username) {
		Date now = new Date();
		Date expiration = new Date(now.getTime() + 1000 * expire);
		return Jwts.builder()
				.setHeaderParam("type", "JWT")
				.setSubject(username)
				.setIssuedAt(now)
				.setExpiration(expiration)
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}

	public static Claims getClaimsByToken(String token) {
		return Jwts.parser()
				.setSigningKey(secret)
				.parseClaimsJws(token)
				.getBody();
	}
}