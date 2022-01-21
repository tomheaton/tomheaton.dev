
const Test = () => {
    return (
        <div className={"bg-color:violet-900"}>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                     src={"https://github.com/tomheaton.png"} alt="" width="384" height="512"/>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Tailwind CSS is the only framework that I{"'"}ve seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                Sarah Dayan
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
            </figure>
            <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"/>
                    </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    Writes Upside-Down
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works
                    in outer space.
                </p>
            </div>
        </div>
    );
}

export default Test;