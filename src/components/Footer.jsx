const Footer = () => {
    const team = [
        {
            name: "Marc",
            image: "/images/marc.jpg",
        },
    ]
    return (
        <footer className="bg-primary absolut left-0 bottom-0 text-white py-6 w-full z-40 min-h-[200px]">
            <section className="max-w-7xl mx-auto px-4 gap-y-5 lg:px-8 flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between">
                <article className="flex flex-col gap-y-4 justify-center items-center lg:items-start">
                    <p className="capitalize text-sm font-medium">
                        Contacta con nosotros en linkedIn
                    </p>
                    <ul className="flex gap-x-4">
                        {team.map((member) => (
                            <li
                                className="flex flex-col items-center justify-center gap-y-1"
                                key={member.name}
                            >
                                <img
                                    className="w-14 rounded-full"
                                    src={member.image}
                                    alt={`Foto de ${member.name}`}
                                />
                                <p className="text-sm font-light">
                                    {member.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="flex flex-col justify-center items-start gap-y-3 lg:items-end">
                    <p className="capitalize text-sm font-medium">
                        Puedes mirar el código fuente en los siguientes enlaces:
                    </p>
                    <div className="flex flex-col justify-center items-start gap-y-1">
                        <a
                            className="text-sm font-light hover:underline cursor-pointer"
                            href="https://github.com/marcsalou23/Softbook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            FullStack
                        </a>
                    </div>
                </article>
            </section>
        </footer>
    )
}

export default Footer
