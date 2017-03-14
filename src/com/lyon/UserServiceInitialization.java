package com.lyon;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.io.File;


/**
 * Created by lyon on 17-3-11.
 */
@WebListener
public class UserServiceInitialization implements ServletContextListener {
    public void contextInitialized(ServletContextEvent sce) {
        ServletContext context = sce.getServletContext();
        String USERS = sce.getServletContext().getInitParameter("USERS");
        String STATIC = sce.getServletContext().getInitParameter("STATIC");
        USERS = context.getRealPath(USERS);
        STATIC = context.getRealPath(STATIC);
        context.setAttribute("userService", new UserService(USERS, STATIC));
    }

    public void contextDestroyed(ServletContextEvent sce) {}
}
