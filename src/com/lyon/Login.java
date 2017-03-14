package com.lyon;

/**
 * Created by lyon on 17-3-11.
 */
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.annotation.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/register")
public class Login extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        JSONObject jsonObject = new JSONObject();
        if (username.length() <= 16 && username.length() >= 4) {
            try {
                jsonObject.put("success", true);
                jsonObject.put("message", "sign up successfully");
            } catch (JSONException e) {
                e.printStackTrace();
            }
            out.write(jsonObject.toString());
        } else {
            try {
                jsonObject.put("successfully", false);
                jsonObject.put("message", "sign up failed");
            } catch (JSONException e) {
                e.printStackTrace();
            }
            out.write(jsonObject.toString());
        }
        out.close();
    }
}
