"use client";
import Button from "../button";

export default function Header() {
    return(
        <>
            <h1 className="text-4xl font-bold">
                Hope for Tomorrow: Empowering Communities Through Education
            </h1>
            <div className="mt-3 flex flex-col gap-3">
                <p className="text-lg text-secondary">
                    Join us in making a positive impact on the future! Our fundraiser, "Hope for Tomorrow," aims to empower underprivileged communities through the gift of education. By contributing to this cause, you're not just donating; you're investing in the potential of countless bright minds.
                </p>
                <p className="text-lg text-secondary">
                    Your support will make a lasting difference in the lives of these children, opening doors to a brighter future filled with possibilities. Join us on this journey to build hope, inspire change, and create a world where every child has the chance to dream big and achieve even bigger.
                </p>
                <p className="text-lg text-secondary">
                    Make a donation today and be a part of the movement that transforms lives through education. Together, we can build a better tomorrow!
                </p>
            </div>
            <div className="mt-4 flex">
                <Button
                    onClick={console.log}
                >
                    Donate Now
                </Button>
            </div>
        </>
    )
}