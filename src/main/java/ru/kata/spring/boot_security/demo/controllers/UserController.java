package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<User> profile() {
        return new ResponseEntity<>(userService.findEmail(SecurityContextHolder.getContext()
                .getAuthentication().getName()), HttpStatus.OK);
    }


//    @GetMapping("")
//    public String profile(Model model) {
//        User user =  userService.findEmail(SecurityContextHolder.getContext().getAuthentication().getName());
//        model.addAttribute("user", user);
//        return "/user/profile";
//    }
}