import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";

import CustomButton from "./CustomButton";

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
    return (
        <Box>

            <Typography fontSize={25}
                fontWeight={700}
                color=" #ccd6f6"
            >

                {type} a Property
            </Typography>

            <Box mt={2.5} borderRadius="15px"
                padding="20px" bgcolor=" #233554">

                <form style={{ marginTop: "20px", width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >

                    <FormControl>
                        <FormHelperText sx={{
                            fontWeight: 500, margin: "10px", fontSize: 16, color: "#a8b2d1"
                        }}>Enter Property Name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            style={{
                                borderColor: '#64ffda'
                            }}
                            variant="outlined"
                            {...register("title", {
                                required: true
                            })}
                        >

                        </TextField>

                    </FormControl>

                    <FormControl>
                        <FormHelperText sx={{
                            fontWeight: 500, margin: "10px", fontSize: 16, color: "#a8b2d1"
                        }}>Enter Description
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder="Write Description"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: '#8892b0',
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191"
                            }}
                            {...register("descrption", {
                                required: true
                            })}
                        />

                    </FormControl>

                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#a8b2d1"
                            }}>

                                Select Property Type
                            </FormHelperText>

                            <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{
                                    'aria-label': 'Without label'
                                }}

                                defaultValue="drones"
                                {...register('propertyType',
                                    { required: true })}
                            >
                                <MenuItem value="drones">Drones</MenuItem>
                                <MenuItem value="sensors">Sensors</MenuItem>
                                <MenuItem value="circuits">Circuits</MenuItem>
                                <MenuItem value="drone-part">Drone Part</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                            </Select>

                        </FormControl>

                        <FormControl>
                            <FormHelperText sx={{
                                fontWeight: 500, margin: "10px", fontSize: 16, color: "#a8b2d1"
                            }}>Enter Property Price
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                {...register("price", {
                                    required: true
                                })}
                            >

                            </TextField>

                        </FormControl>

                    </Stack>

                    <FormControl>
                        <FormHelperText sx={{
                            fontWeight: 500, margin: "10px", fontSize: 16, color: "#a8b2d1"
                        }}>Enter Location
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            {...register("location", {
                                required: true
                            })}
                        >

                        </TextField>

                    </FormControl>

                    <Stack direction="column" gap={1}
                        justifyContent="center"
                        mb={2}
                    >

                        <Stack direction="row" gap={2}>
                            <Typography color="#a8b2d1"
                                fontSize={16}
                                fontWeight={500}
                                my={"10px"}

                            >
                                Property Photo
                            </Typography>
                            <Button component="label" sx={{
                                width: 'fit-content', color: "#2ed480",
                                textTransform: "capitalize",
                                fontSize: "16px"
                            }}>

                                Upload*
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(e) => {
                                        // @ts-ignore
                                        handleImageChange(e.target.files[0])
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography fontSize={14} color="#808191" sx={{ wordBreak: "break-all" }}>{propertyImage?.name}</Typography>

                    </Stack>


                    <CustomButton
                        type="submit"
                        title={formLoading ? 'Submitting...' : 'Submit'}
                        backgroundColor="#475be8"
                        color="#fcfcfc"

                    />

                </form>

            </Box>

        </Box>
    )
}

export default Form
