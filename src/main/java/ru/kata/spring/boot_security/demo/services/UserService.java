package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserService {
    void save(User user);
    List<User> show();
    void delete(int id);
    void update(int id, User updateUser);
    User find(int id);
    User find(String name);
    User findEmail(String email);

}
