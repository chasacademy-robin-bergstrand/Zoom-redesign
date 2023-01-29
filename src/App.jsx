import Card from "./Card";
import { SiZoom } from "react-icons/si";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { RiGovernmentLine, RiHealthBookLine } from "react-icons/ri";
import { TfiDropbox } from "react-icons/tfi";
import { AiOutlineTag } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
    return (
        <>
            <header className="h-16 border-b fixed bg-white w-full z-10">
                <nav className="h-16 flex items-center justify-between md:justify-start max-w-screen-2xl gap-6 xl:gap-10 mx-auto xl:px-16 md:px-8 px-2">
                    <SiZoom
                        size={110}
                        className="text-zoom-blue hover:cursor-pointer"
                    />

                    <ul className="hidden gap-6 xl:gap-10 text-gray-700 lg:flex">
                        <li>
                            <a className="hover:cursor-pointer hover:text-blue-600">
                                Products
                            </a>
                        </li>
                        <li>
                            <a className="hover:cursor-pointer hover:text-blue-600">
                                Solutions
                            </a>
                        </li>
                        <li>
                            <a className="hover:cursor-pointer hover:text-blue-600">
                                Resources
                            </a>
                        </li>
                        <li>
                            <a className="hover:cursor-pointer hover:text-blue-600">
                                Plans & Pricing
                            </a>
                        </li>
                    </ul>

                    <div className="ml-auto gap-2 items-center flex">
                        <button className="border hidden md:flex border-zoom-blue text-zoom-blue rounded-full py-2 px-6 font-bold hover:bg-slate-200">
                            Contact Sales
                        </button>
                        <button className="border hidden md:flex border-zoom-blue text-zoom-blue rounded-full py-2 px-6 font-bold hover:bg-slate-200">
                            Sign Up Free
                        </button>
                        <RxHamburgerMenu size={30} className="lg:hidden" />
                    </div>
                </nav>
            </header>
            <main className="flex flex-col">
                <section className="max-w-screen-2xl flex gap-12 mx-auto mb-32  mt-32 md:mt-48 xl:px-16 md:px-8 px-2">
                    <div className="flex flex-col w-3/5 xl:w-2/5 justify-center">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-10">
                            One platform to{" "}
                            <span className="text-zoom-blue">connect</span>
                        </h1>
                        <p className="text-base md:text-lg font-semibold mb-10">
                            Bring teams together, reimagine workspaces, engage
                            new audiences, and delight your customers — all on
                            the Zoom platform you know and love.
                        </p>
                        <div className="flex gap-2 flex-col md:flex-row">
                            <button className="bg-zoom-blue text-white rounded-full py-3 px-8 font-semibold hover:brightness-90">
                                Plans & Pricing
                            </button>
                            <button className=" text-zoom-blue rounded-full py-3 px-8 font-semibold border border-zoom-blue border-opacity-0 hover:border-opacity-100">
                                Sign Up, It's Free
                            </button>
                        </div>
                    </div>
                    <img
                        src="/src/assets/woman-desk.jpg"
                        alt="Meeting"
                        className="w-2/5 object-cover object-left-top xl:w-3/5 rounded-3xl"
                    />
                </section>
                <section className="h-auto md:h-80 bg-[#00053d] mb-16 md:mb-32">
                    <div className="h-auto md:h-80 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-10 xl:px-16 md:px-8 px-2">
                        <img
                            src="/src/assets/zm-product-wheel.png"
                            alt="Product wheel"
                            className="max-h-[420px] -translate-y-20 md:-translate-y-0 "
                        />
                        <div className="flex flex-col gap-4 text-blue-100 text-center md:text-left -translate-y-20 md:-translate-y-0">
                            <h2 className="text-4xl font-bold">
                                Make work less work
                            </h2>
                            <p>
                                Securely connect and collaborate so you can work
                                better together. Simple to manage and delightful
                                to use, Zoom powers the modern workforce.
                            </p>
                            <a
                                href="#"
                                className="font-semibold text-lg text-white hover:text-sky-400 hover:border-sky-400 border-b-2 max-w-fit mx-auto md:mx-0"
                            >
                                Discover the Possibilities
                            </a>
                        </div>
                    </div>
                </section>
                <section className="max-w-screen-2xl flex flex-col-reverse gap-10 md:gap-0 md:flex-row mx-auto h-auto md:h-[500px] items-center mb-32 text-[#00053d] xl:px-16 md:px-8 px-2">
                    <div className="md:w-1/2 flex flex-col gap-8 items-start mr-10">
                        <h2 className="text-4xl font-semibold">
                            Powering organizations across industries and
                            geographies
                        </h2>
                        <p className="text-xl">
                            Zoom helps consolidate communications, connect
                            people, and collaborate better together in the
                            boardroom, classroom, operating room, and everywhere
                            in between.
                        </p>
                        <button className="rounded-full bg-cyan-300 py-2 px-6 text-lg hover:bg-cyan-400">
                            Explore Industry Standards
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 grid sm:grid-cols-2 grid-rows-3 h-full gap-5">
                        <Card
                            title="Education"
                            icon={<HiOutlineAcademicCap size={50} />}
                        />
                        <Card
                            title="Financial Services"
                            icon={<MdAttachMoney size={50} />}
                        />
                        <Card
                            title="Government"
                            icon={<RiGovernmentLine size={50} />}
                        />
                        <Card
                            title="Healthcare"
                            icon={<RiHealthBookLine size={50} />}
                        />
                        <Card
                            title="Manufacturing"
                            icon={<TfiDropbox size={50} />}
                        />
                        <Card
                            title="Retail"
                            icon={<AiOutlineTag size={50} />}
                        />
                    </div>
                </section>
                <section className="h-72 flex justify-center items-center flex-col gap-10 bg-zoom-blue">
                    <h2 className="text-5xl text-white font-bold text-center">
                        Ready to get started?
                    </h2>
                    <div className="flex gap-6">
                        <button className="rounded-full bg-cyan-300 py-2 px-6 text-lg hover:bg-cyan-400 text-[#00053d]">
                            Sign Up, It's Free
                        </button>
                        <button className="rounded-full py-2 px-6 text-lg text-white hover:bg-white border hover:text-zoom-blue">
                            Plans & Pricing
                        </button>
                    </div>
                </section>
            </main>
            <footer className="h-96 bg-gray-800"></footer>
        </>
    );
}

export default App;
