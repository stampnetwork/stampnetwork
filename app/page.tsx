import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Logo from "./components/Logo";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];
// ᔑ ᒥ ᐱ ᗰ ᑭ

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tr from-[#000] via-zinc-600/20 to-[#000]">
			<div className="my-10 center">
				<Logo />
			</div>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<Particles
				className="absolute inset-0 -z-10 animate-fade-in text-red"
				quantity={300}
			/>

			<h1 className="z-10 text-4xl bg-[#fff] py-5 text-transparent duration-10000 cursor-default font-display text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
				Stamp Network
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				{/* <div className="override">
					<iframe width="640" height="480" src="https://sketchfab.com/models/c54ea3927b854b76b531993daa793f2e/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0" allow="autoplay; fullscreen; vr"></iframe>
				</div> */}

				<h2 className="text-md align-bottom text-white">
					<Link
						target="_blank"
						href="https://twitter.com/0xPetra"
						className="text-white duration-500 hover:text-zinc-300 hover:text-lg"
					>
						contact
					</Link>
				</h2 >
			</div>
		</div>
	);
}
