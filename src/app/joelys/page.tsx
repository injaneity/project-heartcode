export default function MenteePage() {
    return (
        <div
            className="relative text-black"
            style={{
                backgroundImage: `url(/assets/idontknow.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "1080px"
            }}
        >
            {/* Background overlay */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                style={{
                    zIndex: -1,
                }}
            ></div>

            {/* Text content */}
            <span className="flex flex-col justify-center text-4xl p-10 w-2/3 gap-4">
                <b>Hi, my name is Joelys</b>
                <p>I am part of my school girl guides contingent and completed an Anti-Drug Abuse course.</p>
            </span>
        </div>
    );
}
