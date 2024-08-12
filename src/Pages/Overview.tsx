import React from 'react';
import { GoShieldLock, GoCpu } from "react-icons/go";
import { IoSettingsOutline, IoCloudUploadOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { TiEdit } from "react-icons/ti";
import { RxDiscordLogo } from "react-icons/rx";
import { MdSupportAgent } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import './Overview.css';

const Overview: React.FC = () => {
    return (
        <div className="overview" id="overview-section">
            <div className="overview-item">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <GoShieldLock color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Secure and reliable
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Vulcan always are updated to bypass the Rockstar Anti-Cheat.<br />
                            Play without fear of getting banned or flagged as cheater!<br />
                            It also protects you from other modders and give you options to deal with them.<br />
                            Never be trolled, kicked, crashed again!
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item2">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <IoSettingsOutline color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Plenty of options
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Vulcan give you a lot of options to customize your gameplay.<br/>
                            It stretches from player options, vehicle options, weapon options, world options, and
                            more!<br/>
                            You can crash, kick or troll other players as you want, without fear of reprisal!<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item3">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <TbMoneybag color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Recovery
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Get money for you and friends using our recovery options! <br/>
                            RP Loop, CEO Loop, Money Bag drop, and more!<br/>
                            All our recovery methods are safe to use and undetected and always updated to deliver
                            you the best experience and safety.
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item4">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <GrLanguage color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Translations
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Vulcan have translations for 34 languages, and always are adding new ones!<br/>
                            Use our menu in your native language to better experience.
                            Translation requests can be sent on our Discord.
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item5">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <TiEdit color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Customization
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Customize the menu as you want! We offer two styles of menu for better experience.<br/>
                            Adjust fonts, colors, positions, sizes, as you desire!
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item6">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <GoCpu color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Performance
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Experience better performance with Vulcan!<br/>
                            Optimized for smooth gameplay and minimal lag.<br/>
                            Enjoy a seamless gaming experience with our advanced performance settings.
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item7">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <MdSupportAgent color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Support
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Get the support you need with Vulcan. Access our discord for 24/7 support.<br/>
                            Report bugs and earn rewards!
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item8">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <IoCloudUploadOutline color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Updates
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Stay up-to-date with the latest GTA Online updates.<br/>
                            Vulcan is constantly updated to provide the best experience.<br/>
                            Enjoy new features and enhancements with regular updates.
                        </p>
                    </div>
                </div>
            </div>
            <div className="overview-item9">
                <div className="scale-100">
                    <div>
                        <div className="icon-background">
                            <RxDiscordLogo color="#FFB200" size="3.5rem" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            Community
                        </h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Join the Vulcan community and connect with other users.<br/>
                            Share tips, tricks, and experiences with fellow gamers.<br/>
                            Be a part of a vibrant and supportive community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;