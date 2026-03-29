import { useEffect, useRef } from "react";
import Quagga from "@ericblade/quagga2";


export default function Scanner({hidden, code}) {
    const scannerRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const handleDetected = (data) => {
            code("bar_code",data.codeResult.code)
        }
        const startScanner = () => {
            if (!isMounted || !scannerRef.current) return;

            if (scannerRef.current) {
                Quagga.init({
                    inputStream: {
                        type: "LiveStream",
                        target: scannerRef.current,
                        constraints: {
                            facingMode: "environment",
                        },
                    },
                    decoder: {
                        readers: ["code_128_reader", "ean_reader"],
                    },
                }, (err) => {
                    if (err) {
                        console.log("Err to star Quagga", err)
                        return;
                    }
                    if (isMounted) {
                        Quagga.start();
                        Quagga.onDetected(handleDetected);
                    }
                })

            }
        }


        const timeOut =  setTimeout(startScanner, 200)

        return () => {
            isMounted = false;
            clearTimeout(timeOut);
            Quagga.offDetected(handleDetected);
            Quagga.stop();
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col bg-white w-[50%] lg:w-[30%] p-6 rounded-lg shadow-lg space-y-4">
                <div ref={scannerRef} style={{ width: "100%", height: "400px" }}/>
                <button onClick={hidden} className={"bg-black border text-xs border-gray-200 shadow-xs text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-discrete"}>
                    close
                </button>
            </div>
        </div>
    );
}
