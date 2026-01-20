import {Document, Page, Text, View, StyleSheet, PDFViewer, Image} from "@react-pdf/renderer";
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import { createTw } from "react-pdf-tailwind";
import {useEffect, useState} from "react";
import MainRequests from "../services/requests.js";

// The 'theme' object is your Tailwind theme config
const th_style = " text-sm justify-center p-1 border-gray-200";
const td_style = " text-xs items-center justify-center border-gray-200 p-1"
const requests = new MainRequests()
const on_revenues = true


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

const InvoicePDF = ({revenues, expenses, informations}) => (
    <Document>
        <Page size={"A4"} style={tw("p-12 w-full")}>
            <View style={tw("flex flex-row justify-start gap-2 items-end border border-gray-200 rounded-t-md m-0 p-2")}>
                <View >
                    <Image src="../images/ADEB-logo.png" source={"Logo-ADEB"} style={tw("w-[80px] h-32 ")}/>
                </View>
                <View style={tw("text-9xl")}>
                    <Text>ADEB</Text>
                </View>
            </View>
            <View style={tw("flex flex-row text-sm justify-end items-end border border-gray-200 m-0 p-2")}>
                <Text>Data: {new Date().getDate()}/{String(new Date().getMonth() + 1).padStart(2, "0") }/{new Date().getFullYear()}</Text>
            </View>
            <View style={tw("flex flex-row justify-start gap-2 items-end border border-gray-200 m-0 p-2")}>
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
            <View style={tw("border border-gray-200 m-0 p-2 gap-6")}>
                <View>

                    <Table style={tw("w-full")}>
                        <TH>
                            <TD style={tw(th_style)}>Header 1</TD>
                            <TD style={tw(th_style)}>Header 2</TD>
                            <TD style={tw(th_style)}>Header 2</TD>
                            <TD style={tw(th_style)}>Header 2</TD>
                        </TH>
                        <TR>
                            <TD style={tw(td_style)}>Data 1</TD>
                            <TD style={tw(td_style)}>R$ Data 2</TD>
                            <TD style={tw(td_style)}>Data 2</TD>
                            <TD style={tw(td_style)}>Data 2</TD>
                        </TR>
                    </Table>
                </View>
                <View>
                    <Text style={tw("text-lg ")}>Receitas</Text>
                    <Table style={tw("w-full")}>
                        <TH>
                            <TD style={tw(th_style)}>nome</TD>
                            <TD style={tw(th_style)}>valor</TD>
                            <TD style={tw(th_style)}>data</TD>
                            <TD style={tw(th_style)}>entrada</TD>
                        </TH>
                        {revenues.map((revenue) => (

                            <TR>
                                <TD style={tw(td_style)}>{revenue.member}</TD>
                                <TD style={tw(td_style)}>R${revenue.value}</TD>
                                <TD style={tw(td_style)}>
                                    {new Date(revenue.date).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}</TD>
                                <TD style={tw(td_style)}>{revenue.payment}</TD>
                            </TR>
                        ))}
                        <TR>
                            <TD style={tw("flex-1 px-2 text-xs items-center justify-center border-gray-200")}>Data 2</TD>
                            <TD style={tw(td_style)}>Data 2</TD>
                        </TR>
                    </Table>
                </View>
                <View>
                    <Text style={tw("text-lg ")}>Gastos</Text>
                    <Table style={tw("w-full")}>
                        <TH>
                            <TD style={tw(th_style)}>Header 1</TD>
                            <TD style={tw(th_style)}>Header 2</TD>
                            <TD style={tw(th_style)}>Header 2</TD>
                            <TD style={tw(th_style)}>Header 2</TD>
                        </TH>
                        <TR>
                            <TD style={tw(td_style)}>Data 1</TD>
                            <TD style={tw(td_style)}>R$ Data 2</TD>
                            <TD style={tw(td_style)}>Data 2</TD>
                            <TD style={tw(td_style)}>Data 2</TD>
                        </TR>
                        <TR>
                            <TD style={tw("flex-1 px-2 text-xs items-center justify-center border-gray-200")}>Data 2</TD>
                            <TD style={tw(td_style)}>Data 2</TD>
                        </TR>
                    </Table>
                </View>
            </View>

        </Page>
    </Document>
);

export default function LocalReportsPage(){
    const [revenues, setRevenues] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [information, setInformation] = useState([]);
    async function onGetData() {
        try {
            const response = await requests.onCreateRepost(`local`, {
                type_revenues: "All",
                type_expenses: "All",
                start_date: "2025/12/01",
                end_date: "2026/01/01"});
            setRevenues(response.revenues);
            setExpenses(response.expenses)
            setInformation(response.info_user)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        onGetData().then();
    },[]);


    return (

        <div className={"h-full w-full"}>
            <PDFViewer style={tw("h-[100%] w-[100%]")} >
                <InvoicePDF revenues={revenues} expenses={expenses} informations={information} />
            </PDFViewer>
        </div>

    );
}