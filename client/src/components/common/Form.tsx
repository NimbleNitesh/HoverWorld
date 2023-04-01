import React from 'react'
import {
    Box,
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";
const Form = ({type,
    register,
    handleSubmit,
    handleImageChange,
    formLoading,
    onFinishHandler,
    propertyImage,
  }:FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>
       <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                    >
                </form>
    </Box>
  )
}

export default Form