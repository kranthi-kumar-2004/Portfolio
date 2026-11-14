import { useEffect, useState } from "react";
import { Terminal, ShieldCheck, ShieldAlert } from "lucide-react";

function generateQuestion() {
    const operators = ["+", "-", "*"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let a = Math.floor(Math.random() * 5) + 5;
    let b = Math.floor(Math.random() * 5) + 1;

    if (operator === "-" && b > a) {
        [a, b] = [b, a];
    }

    let answer;

    switch (operator) {
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break;
        default:
            answer = a * b;
    }

    return {
        question: `${a} ${operator} ${b}`,
        answer
    };
}

function WelcomePopup({ onAccessGranted }) {
    const [challenge, setChallenge] = useState(generateQuestion);
    const [userAnswer, setUserAnswer] = useState("");
    const [status, setStatus] = useState("pending");
    const [displayText, setDisplayText] = useState("");

    const message = "Welcome to KranthiDev!";

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < message.length) {
                setDisplayText(message.substring(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    const verifyAnswer = (e) => {
        e.preventDefault();

        if (userAnswer.trim() === "") return;

        if (Number(userAnswer) === challenge.answer) {
            setStatus("success");

            setTimeout(() => {
                onAccessGranted();
            }, 1000);

        } else {
            setStatus("denied");
            setUserAnswer("");

            setTimeout(() => {
                setChallenge(generateQuestion());
                setStatus("pending");
            }, 1500);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5 bg-black/40 backdrop-blur-sm">

            <div className="w-full max-w-lg bg-[#080e0b]/95 border border-[#00FFA3]/40 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,163,0.2)]">

                <div className="flex items-center justify-between px-5 py-4 bg-[#0a110e] border-b border-[#00FFA3]/20">

                    <div className="flex items-center gap-3">

                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>

                        <span className="text-[#00FFA3] font-mono text-xs">
                            kranthi@security:~ — terminal
                        </span>

                    </div>

                    <Terminal size={18} className="text-[#00FFA3]" />

                </div>

                <div className="p-6 sm:p-8 font-mono">

                    <p className="text-gray-500 text-xs mb-5">
                        root@kranthi:~$ ./security_check.sh
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                        {displayText}
                        <span className="text-[#00FFA3] terminal-cursor">█</span>
                    </h2>

                    <p className="text-gray-400 text-sm mb-5">
                        &gt; Human verification required.
                    </p>

                    {status === "pending" && (

                        <form onSubmit={verifyAnswer}>

                            <div className="border border-[#00FFA3]/30 bg-[#050807] rounded p-5 mb-5">

                                <p className="text-gray-500 text-xs mb-4">
                                    SECURITY CHALLENGE
                                </p>

                                <p className="text-[#00FFA3] text-3xl text-center font-bold">
                                    {challenge.question} = ?
                                </p>

                            </div>

                            <input
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                placeholder="Enter your answer..."
                                autoFocus
                                required
                                className="w-full bg-[#050807] border border-[#00FFA3]/30 rounded px-4 py-3 text-white outline-none focus:border-[#00FFA3] font-mono"
                            />

                            <button
                                type="submit"
                                className="w-full mt-5 bg-[#00FFA3] text-black py-3 font-bold text-sm hover:bg-[#00cc82] transition"
                            >
                                ./verify_access.sh
                            </button>

                        </form>

                    )}

                    {status === "success" && (

                        <div className="text-center py-6">

                            <ShieldCheck
                                size={55}
                                className="text-green-400 mx-auto mb-4"
                            />

                            <h3 className="text-green-400 text-xl font-bold">
                                ACCESS GRANTED
                            </h3>

                            <p className="text-gray-400 text-xs mt-3">
                                &gt; Verification successful.
                            </p>

                            <p className="text-[#00FFA3] text-xs mt-2">
                                &gt; Initializing portfolio...
                            </p>

                        </div>

                    )}

                    {status === "denied" && (

                        <div className="text-center py-6">

                            <ShieldAlert
                                size={55}
                                className="text-red-500 mx-auto mb-4"
                            />

                            <h3 className="text-red-400 text-xl font-bold">
                                ACCESS DENIED
                            </h3>

                            <p className="text-gray-400 text-xs mt-3">
                                &gt; Incorrect answer.
                            </p>

                            <p className="text-red-400 text-xs mt-2">
                                &gt; Generating new challenge...
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default WelcomePopup;