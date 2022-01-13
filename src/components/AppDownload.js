import React from "react";
import { useTheme } from "../context/ThemeContext";

const AppDownload = () => {
    const { theme } = useTheme();
    return (
        <div className="relative">
            <div
                className="absolute top-0 rounded-full right-3/4 mr-40 xl:mr-72 lg:-mt-32 z-10"
                style={{
                    backgroundColor: theme.primary.normal,
                    width: "200px",
                    paddingBottom: "200px",
                }}
            ></div>
            <div
                className="container mx-auto px-10 md:px-20 md:flex font-mulish"
                style={{ color: theme.textcolor.dark }}
            >
                <div className="w-full md:w-1/2 pr-8 space-y-5 flex flex-col justify-center lg:-mt-40">
                    <h2 className="text-3xl md:text-3xl xl:text-5xl font-bold w-full">
                        Mobile App Download
                    </h2>
                    <p className="w-full md:pr-20">
                        ShopRacks is an online plateform that gives you an edge
                        in the day-to-day running of your businesses. It is a
                        tracking and management app ideal for documenting
                        inventories and invoices. You can also keep track and
                        manage your products, orders and deliveries with ease
                        and speed.
                    </p>
                    <div className="flex justify-start">
                        <img
                            src="/img/pic-9.svg"
                            alt="Apple-Store"
                            className="-ml-12"
                        />
                        <img
                            src="/img/pic-10.svg"
                            alt="Google-Store"
                            className="-ml-12"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/img/pic-11.svg" alt="App-Download" />
                </div>
            </div>
        </div>
    );
};

export default AppDownload;
