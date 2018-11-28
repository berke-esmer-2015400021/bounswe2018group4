package com.memorist.memorist_android.helper;

/**
 * All constants are stored in this class.
 */
public class Constants {

    private static final String API_BASE_URL = "http://18.234.162.48:8000";
    public static final String API_LOGIN = API_BASE_URL + "/auth/login/";
    public static final String API_REGISTER = API_BASE_URL + "/auth/register/";
    public static final String API_CREATE_MEMORY = API_BASE_URL + "/post/create/1/";
    public static final String API_CREATE_PHOTO = API_BASE_URL + "/post/media/1/";
    public static final String API_CREATE_VIDEO = API_BASE_URL + "/post/media/2/";
    public static final String API_CREATE_AUDIO = API_BASE_URL + "/post/media/3/";

}