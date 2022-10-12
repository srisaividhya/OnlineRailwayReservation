package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfiguration {
	public static final String GET="GET";
    public static final String POST="POST";
    public static final String DELETE="DELETE";
    public static final String PUT="PUT";
    public static final String OPTIONS="OPTIONS";


    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods(GET, POST, PUT, DELETE,OPTIONS)
                        .allowedHeaders("*")
                        .allowedOriginPatterns("*")
                        .allowCredentials(false);
            }
        };
    }

}
