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

      <Typography fontSize={25} fontWeight={700} color="#ffffff">
        {type} your item

      </Typography>
       <Box mt={0.5} borderRadius="15px" padding="20px" bgcolor="#112240">
                <form
                    style={{
                        marginTop: "0px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                    >

                      <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#a8b2d1",
                                
                            }}
                        >
                            Item name
                        </FormHelperText>
                        <TextField inputProps={{ style: { color: "white" } }}
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            {...register("title", { required: true })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#a8b2d1",
                            }}
                        >
                            Describe your item
                        </FormHelperText>
                        <TextareaAutosize 
                            minRows={5}
                            required
                            placeholder="Write description"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "#a8b2d1",
                                borderRadius: 6,
                                padding: 10,
                                color: "#FFFFFF",
                            }}
                            {...register("description", { required: true })}
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#a8b2d1",
                                }}
                            >
                                Item Type
                            </FormHelperText>
                            <Select 
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ style: { borderColor: "#a8b2d1", color: "white" }, "aria-label": "Without label" }}
                                defaultValue="Electronics"
                                {...register("propertyType", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="Mobiles">Mobiles</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                                <MenuItem value="Vehicles">Vehicles</MenuItem>
                                <MenuItem value="Books">Books</MenuItem>
                                <MenuItem value="Clothes">Clothes</MenuItem>
                                <MenuItem value="Furniture">Furniture</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#a8b2d1",
                                }}
                            >
                               Item price (in ₹)
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                {...register("price", { required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#a8b2d1",
                            }}
                        >
                            Is your item refundable?
                        </FormHelperText>
                        <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="No"
                                {...register("location", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="No">No</MenuItem>
                                <MenuItem value="Yes">Yes</MenuItem>
                            </Select>
                        {/* <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            {...register("location", { required: true })}
                        /> */}
                    </FormControl>

                    <Stack
                        direction="column"
                        gap={1}
                        justifyContent="center"
                        mb={2}
                    >
                        <Stack direction="row" gap={2}>
                            <Typography
                                color="#a8b2d1"
                                fontSize={16}
                                fontWeight={500}
                                my="10px"
                            >
                                Item Photo
                            </Typography>

                            <Button
                                component="label"
                                sx={{
                                    width: "fit-content",
                                    color: "#2ed480",
                                    textTransform: "capitalize",
                                    fontSize: 16,
                                }}
                            >
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        handleImageChange(e.target.files![0]);
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography
                            fontSize={14}
                            color="#e6f1ff"
                            sx={{ wordBreak: "break-all" }}
                        >
                            {propertyImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
                </Box>
    </Box>
  );
};


export default Form;