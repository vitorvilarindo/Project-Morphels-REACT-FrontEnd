import {Document, Page, Text, View, StyleSheet, PDFViewer, Image} from "@react-pdf/renderer";
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import { createTw } from "react-pdf-tailwind";

// The 'theme' object is your Tailwind theme config
const td_style = " text-base p-1"

const tw = createTw({
    theme: {
        fontFamily: {
            sans: ["Comic Sans"],
        },
        extend: {
            colors: {
                custom: "#bada55",
            },
        },
    },
});

const InvoicePDF = () => (
    <Document>
        <Page size={"A4"} style={tw("p-12 w-full")}>
            <View style={tw("flex flex-row justify-left gap-2 items-end border border-gray-200 rounded-t-md m-0 p-2")}>
                <View style={tw("")}>
                    <Image src="../images/ADEB-logo.png" source={"Logo-ADEB"} style={tw("w-[70px] h-32 ")}/>
                </View>
                <View style={tw("text-9xl")}>
                    <Text>ADEB</Text>
                </View>
            </View>
            <View style={tw("flex flex-row justify-left gap-2 items-end border border-gray-200 m-0 p-2")}>
                <View style={tw("w-full pl-[10px] text-sm")}>
                    <Text>Igreja:</Text>
                    <Text>Pastor local:</Text>
                    <Text>Tesoureiro:</Text>
                </View>
                <View style={tw("w-full pl-[10px] text-sm")}>
                    <Text>Pastos presidente:</Text>
                    <Text>Coordenador setorial:</Text>
                    <Text>Setor:</Text>
                </View>
            </View>
            <View style={tw("flex flex-row justify-left gap-2 items-end border border-gray-200 m-0 p-2")}>
                <Table style={tw("w-full border border-gay-300")}>
                    <TH style={tw("w-full border")}>
                        <TD style={tw(td_style)}>Header 1</TD>
                        <TD style={tw(td_style)}>Header 2</TD>
                    </TH>
                    <TR>
                        <TD>Data 1</TD>
                        <TD>Data 2</TD>
                    </TR>
                </Table>
            </View>

        </Page>
    </Document>
);

export default function App(){

    return (

        <div className={"h-[100%]"}>
            <PDFViewer style={tw("h-[100%] w-[100%]")} >
                <InvoicePDF />
            </PDFViewer>
        </div>

    );
}