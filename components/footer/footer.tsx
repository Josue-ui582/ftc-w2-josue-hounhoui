import React from "react";
import logo from "../../app/asserts/Logo.png"
import Image from "next/image";

const Footer = () => {
    return(
        <footer className="flex justify-center items-center bg-white">
            <div className="flex justify-center items-center flex-col md:w-[70%] w-[90%] md:py-10 py-6 md:gap-4 gap-8">
                <div className="flex md:flex-row flex-col md:justify-between items-start justify-start w-full gap-8">
                    <div className="flex flex-col justify-start items-start gap-4 md:w-[20%]">
                        <div className="flex">
                            <Image 
                                src={logo}
                                alt="Logo"
                            />
                            <p className="font-semibold">Spend.In</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[13px]">Data visualization, and expense management for your business.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-sm">Product</h4>
                            <ul className="flex flex-col gap-2 text-[12px] text-gray-400">
                                <li>Digital Invoice</li>
                                <li>Insights</li>
                                <li>Reimbursements</li>
                                <li>Virtual Assistant</li>
                                <li>Artificial Intelligence</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-sm">Company</h4>
                            <ul className="flex flex-col gap-2 text-[12px] text-gray-400">
                                <li>About Us</li>
                                <li>Newsletters</li>
                                <li>Our Partners</li>
                                <li>Career</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-sm">Resources</h4>
                            <ul className="flex flex-col gap-2 text-[12px] text-gray-400">
                                <li>Blog</li>
                                <li>Pricing</li>
                                <li>FAQ</li>
                                <li>Events</li>
                                <li>Ebook & Guide</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-sm">Followus</h4>
                            <ul className="flex flex-col gap-2 text-[12px] text-gray-400">
                                <li>LinkedIn</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-400 h-[1px] w-full"></div>
                <div className="flex md:flex-row flex-col md:justify-between md:items-center justify-start items-start w-full gap-8">
                    <div className="flex md:flex-row flex-col md:gap-4 gap-6">
                        <p className="text-[13px]">Privacy Policy</p>
                        <div className="bg-black w-[1px] self-stretch hidden md:flex"></div>
                        <p className="text-[13px]">Terms & Conditions</p>
                        <div className="bg-black w-[1px] self-stretch hidden md:flex"></div>
                        <p className="text-[13px]">Cookie Policy</p>
                    </div>
                    <div>
                        <p className="text-[13px] text-gray-500">© Picko Lab 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;