package com.server.cinemaepul.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HelloController {

    @RequestMapping({ "/hello" })
    public String sayHello() {
        return "Hello World";
    }
}
