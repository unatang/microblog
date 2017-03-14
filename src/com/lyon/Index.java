package com.lyon;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by lyon on 17-3-12.
 */
@WebServlet(urlPatterns = { "*.html", "*.css", "*.js" })
public class Index extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws
            ServletException, IOException {
        UserService userService = (UserService)request.getServletContext()
                .getAttribute("userService");
        String staticFile = request.getRequestURI();
        staticFile = staticFile.substring(staticFile.lastIndexOf("/") + 1);
        System.out.println(staticFile);
        String fileType = staticFile.substring(staticFile.lastIndexOf(".")+1);
        PrintWriter out = response.getWriter();
        if (!userService.hasStaticFile(staticFile)) {
            out.write("resource not found");
            out.close();
            return;
        }
        if (fileType.equals("html")) {
            out.write(userService.getHtml(staticFile));
        } else if (fileType.equals("css")) {
            out.write(userService.getCss(staticFile));
        } else {
            out.write(userService.getJs(staticFile));
        }
    }
}
