// src/pages/DemandForecast.jsx
import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", wheat: 4000, rice: 2400, maize: 2400 },
  { month: "Feb", wheat: 3000, rice: 1398, maize: 2210 },
  { month: "Mar", wheat: 2000, rice: 9800, maize: 2290 },
  { month: "Apr", wheat: 2780, rice: 3908, maize: 2000 },
  { month: "May", wheat: 1890, rice: 4800, maize: 2181 },
  { month: "Jun", wheat: 2390, rice: 3800, maize: 2500 },
  { month: "Jul", wheat: 3490, rice: 4300, maize: 2100 },
];

const DemandForecast = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading size="lg">📈 Demand Forecasting</Heading>
        <Text>Predicted monthly demand trends of major crops.</Text>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="wheat" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="rice" stroke="#82ca9d" />
            <Line type="monotone" dataKey="maize" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </VStack>
    </Box>
  );
};

export default DemandForecast;
