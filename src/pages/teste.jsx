import { useEffect, useRef } from "react";
import Quagga from "@ericblade/quagga2";


export default function Scanner() {
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

    return <div ref={scannerRef} style={{ width: "100%", height: "400px" }} />;
}
