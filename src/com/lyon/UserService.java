package com.lyon;

import java.io.*;

/**
 * Created by lyon on 17-3-11.
 */
public class UserService {
    public String STATIC;
    public String USERS;

    public UserService(String USERS, String STATIC) {
        this.USERS = USERS;
        this.STATIC = STATIC;
        System.out.println(this.USERS + "\n" + this.STATIC);
    }

    public String getHtml(String html) {
        return readFile(STATIC + File.separator +"html" + File.separator + html);
    }

    public String getCss(String css) {
        return readFile(STATIC + File.separator + "css" + File.separator + css);
    }

    public String getJs(String js) {
        return readFile(STATIC + File.separator + "js" + File.separator + js);
    }

    public boolean hasStaticFile(String file) {
        if (new File(STATIC + File.pathSeparator +"html" + File.separator + file).isFile()) {
            return true;
        } else if (new File(STATIC + File.pathSeparator + "js" + File.separator + file).isFile()) {
            return true;
        } else if (new File(STATIC + File.pathSeparator + "css" + File.separator + file).isFile()) {
            return true;
        } else if (new File(STATIC + File.pathSeparator + "images" + File.separator + file).isFile()) {
            return true;
        } else {
            return false;
        }
    }

    public void readStream(OutputStream os, String file) {
        String realFile = STATIC + File.separator + "images" + File.separator + file;
        try {
            BufferedInputStream in = new BufferedInputStream(new FileInputStream(realFile));
            int c;
            while ((c = in.read()) != -1) {
                os.write(c);
            }
            os.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public String readFile(String filename) {
        StringBuilder sb = new StringBuilder();
        try {
            BufferedReader in = new BufferedReader(new FileReader(filename));
            String s;
            while ((s = in.readLine()) != null) {
                sb.append(s);
            }
            in.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sb.toString();
    }
}
