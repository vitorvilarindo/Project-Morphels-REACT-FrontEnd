import { useEffect, useRef } from "react";
import Quagga from "@ericblade/quagga2";


export default function Scanner({hidden}) {
    const scannerRef = useRef(null);

    useEffect(() => {
        if (scannerRef.current) {
            Quagga.init({
                inputStream: {
                    type: "LiveStream",
                    target: scannerRef.current,
                    constraints: {
                        facingMode: "environment",
                        width: 640,
                        height: 480,
                    },
                },
                decoder: {
                    readers: ["code_128_reader", "ean_reader"],
                },
            }, (err) => {
                if (!err) Quagga.start();
            })

            Quagga.onDetected((data) => {
                console.log(data);
            });
        }

        return () => {
            Quagga.offDetected();
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
