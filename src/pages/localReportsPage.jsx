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

const InvoicePDF = ({revenues, expenses, information, sum}) => (
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
                    <Text style={tw("space-x-20")}>Igreja: {information[0].church_name}</Text>
                    <Text>Pastor local: {information[0].sherperd_name}</Text>
                    <Text>Tesoureiro: {information[0].user_name}</Text>
                </View>
                <View style={tw("w-full pl-[10px] text-sm")}>
                    <Text>Pastos presidente: {information[0].presidente_name}</Text>
                    <Text>Coordenador setorial: {information[0].coordenator_name}</Text>
                    <Text>Setor: {information[0].sector_name}</Text>
                </View>
            </View>
            <View style={tw("border border-gray-200 m-0 p-2 gap-6")}>
                <View>

                    <Table style={tw("w-full")}>
                        <TH>
                            <TD style={tw(th_style)}>Total Receitas</TD>
                            <TD style={tw(th_style)}>Total Gastos</TD>
                            <TD style={tw(th_style)}>Saldo</TD>
                        </TH>
                        <TR>
                            <TD style={tw(td_style)}>R$ {sum[0].revenues_sum}</TD>
                            <TD style={tw(td_style)}>R$ {sum[0].expenses_sum}</TD>
                            <TD style={tw(td_style)}>R$ {sum[0].revenues_sum - sum[0].expenses_sum}</TD>
                        </TR>
                    </Table>
                </View>
                {revenues.length !== 0 && (<View>
                    <Text style={tw("text-lg ")}>Receitas</Text>
                    <Table style={tw("w-full")}>
                        <TH>
                            <TD style={tw(th_style)}>nome</TD>
                            <TD style={tw(th_style)}>valor</TD>
                            <TD style={tw(th_style)}>data</TD>
                            <TD style={tw(th_style)}>entrada</TD>
                        </TH>
                        {revenues.map((revenue) => (

                            <TR key={revenue.id}>
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
                            <TD style={tw("flex-1 px-2 text-xs items-center justify-center border-gray-200")}>TOTAL</TD>
                            <TD style={tw(td_style)}>{sum[0].revenues_sum}</TD>
                        </TR>
                    </Table>
                </View>)}
                {expenses.length !== 0 && (<View>
                    <Text style={tw("text-lg ")}>Gastos</Text>
                    <Table style={tw("w-full")}>
                        <TH>
                            <TD style={tw(th_style)}>nome</TD>
                            <TD style={tw(th_style)}>valor</TD>
                            <TD style={tw(th_style)}>data</TD>
                            <TD style={tw(th_style)}>entrada</TD>
                        </TH>
                        {expenses.map((expense) => (
                            <TR key={expense.id} >
                                <TD style={tw(td_style)}>{expense.member}</TD>
                                <TD style={tw(td_style)}>R$ {expense.value}</TD>
                                <TD style={tw(td_style)}>{expense.date}</TD>
                                <TD style={tw(td_style)}>{expense.payment}</TD>
                            </TR>
                        ))}

                        <TR>
                            <TD style={tw("flex-1 px-2 text-xs items-center justify-center border-gray-200")}>TOTAL</TD>
                            <TD style={tw(td_style)}>{sum[0].expenses_sum}</TD>
                        </TR>
                    </Table>
                </View>)}
            </View>

        </Page>
    </Document>
);

export default function LocalReportsPage(){
    const [revenues, setRevenues] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [sum, setSum] = useState([]);
    const [information, setInformation] = useState([]);
    async function onGetData() {
        try {
            const response = await requests.onRepost(`local`, {
                type_revenues: "All",
                type_expenses: "All",
                start_date: "2025/01/01",
                end_date: "2026/01/01"});
            setRevenues(response.revenues);
            setExpenses(response.expenses)
            setInformation(response.information)
            setSum(response.sum)
            console.log(expenses.length)
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
                <InvoicePDF revenues={revenues} expenses={expenses} information={information} sum={sum} />
            </PDFViewer>
        </div>

    );
}