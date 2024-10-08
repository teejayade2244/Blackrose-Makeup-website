/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { useForm, Controller } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { motion } from "framer-motion"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function Contact() {
    const [showLocationOptions, setShowLocationOptions] = useState(false)
    const [selectedLocationOption, setSelectedLocationOption] = useState("")
    const [showTrainingOptions, setShowTrainingOptions] = useState(false)
    const {
        register,
        unregister,
        handleSubmit,
        control,
        formState: { errors },
        clearErrors,
    } = useForm()
    const USER_REGEX = /^[a-zA-Z]+$/

    // Define animations
    const containerVariants = {
        hidden: { opacity: 0, x: "-100vw" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.2,
                duration: 1.5,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                ease: "easeOut",
                duration: 1,
                delay: 0.5,
            },
        },
    }

    // conditions for inputs
    const handleEnquiryChange = (e) => {
        if (
            e.target.value === "Bridal Makeup" ||
            e.target.value === "Face Makeup"
        ) {
            setShowLocationOptions(true)
        } else {
            setShowLocationOptions(false)
            setSelectedLocationOption("")
        }
        if (e.target.value === "Blackrose Makeup Training Class") {
            setShowTrainingOptions(true)
        } else {
            setShowTrainingOptions(false)
        }
    }

    const handleLocationOptionChange = (e) => {
        setSelectedLocationOption(e.target.value)
    }

    // Unregister SpecificLocation when Blackrose Makeup Studio is selected
    useEffect(() => {
        if (
            selectedLocationOption ===
            "Blackrose Makeup Studio: 2, Piccadilly Street, Lekki, Lagos State"
        ) {
            unregister("SpecificLocation")
            unregister("LocationOption")
            clearErrors("SpecificLocation")
            clearErrors("LocationOption")
        }
    }, [selectedLocationOption, unregister, clearErrors])

    //User Data Submission
    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <Layout>
            <motion.div
                className="bg-black text-white py-5 px-2 flex lg:flex-row flex-col gap-y-5 lg:justify-evenly"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="bg-white text-black rounded-md px-2 max-w-5xl mx-auto md:max-w-[50%] md:mx-10 ">
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <motion.div
                            className="px-3 py-2"
                            variants={itemVariants}
                        >
                            <motion.div className="flex justify-center">
                                <h1 className="font-cinzel md:text-3xl text-[22px] uppercase mt-4">
                                    Contact Us
                                </h1>
                            </motion.div>
                            <motion.p className="font-spectral text-[14px] md:text-[15px] text-center mb-3">
                                Would you like more information about our
                                training courses or have a question about our
                                services? Kindly complete the following form,
                                and a member of our staff will be in contact
                                with you no later than 48 hours.
                            </motion.p>

                            <motion.div className="flex flex-col gap-y-6">
                                {/* Firstname and Lastname */}
                                <motion.div className="flex lg:items-center lg:flex-row flex-col gap-y-5 lg:gap-x-4">
                                    <div className="relative lg:w-[50%]">
                                        <InputField
                                            name="firstname"
                                            type="text"
                                            placeholder="First Name*"
                                            errors={errors}
                                            register={register}
                                            validation={{
                                                pattern: {
                                                    value: USER_REGEX,
                                                    message:
                                                        "Name must contain letters only.",
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="relative lg:w-[50%]">
                                        <InputField
                                            name="lastname"
                                            type="text"
                                            placeholder="Last Name*"
                                            errors={errors}
                                            register={register}
                                            validation={{
                                                pattern: {
                                                    value: USER_REGEX,
                                                    message:
                                                        "Name must contain letters only.",
                                                },
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div className="relative">
                                    <InputField
                                        name="email"
                                        type="email"
                                        placeholder="Email*"
                                        errors={errors}
                                        register={register}
                                    />
                                </motion.div>

                                {/* Phone number */}
                                <motion.div style={{ width: "100%" }}>
                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <PhoneInput
                                                {...field}
                                                country={"ng"}
                                                inputStyle={{
                                                    width: "100%",
                                                    height: "40px",
                                                }}
                                                inputProps={{
                                                    name: "phone",
                                                    required: true,
                                                    autoFocus: true,
                                                }}
                                            />
                                        )}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="px-3 py-2"
                            variants={itemVariants}
                        >
                            <h1
                                className={`font-spectral border-black mb-3 border-2 border-x-0 border-t-0 py-1 text-black lg:text-[17px] text-[15px] ${
                                    errors["EnquiryDetails"]
                                        ? "text-red-600"
                                        : ""
                                }`}
                            >
                                INQUIRIES THAT YOU WOULD LIKE TO MAKE?
                            </h1>

                            <motion.div className="flex flex-col gap-y-3 font-Italiana font-light">
                                <motion.div>
                                    <RadioInput
                                        id="Face Makeup"
                                        name="EnquiryDetails"
                                        value="Face Makeup"
                                        label="Face Makeup"
                                        register={register}
                                        onChange={handleEnquiryChange}
                                    />
                                </motion.div>
                                <motion.div>
                                    <RadioInput
                                        id="Bridal Makeup"
                                        name="EnquiryDetails"
                                        value="Bridal Makeup"
                                        label="Bridal Makeup"
                                        register={register}
                                        onChange={handleEnquiryChange}
                                    />
                                </motion.div>
                                <motion.div className="font-Italiana font-light">
                                    <RadioInput
                                        id="Blackrose Makeup Training Class"
                                        name="EnquiryDetails"
                                        value="Blackrose Makeup Training Class"
                                        label="Blackrose Makeup Training Class"
                                        register={register}
                                        onChange={handleEnquiryChange}
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div className="relative w-full rounded-lg border mt-3 border-gray-300">
                                <Controller
                                    name="date"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            selected={field.value}
                                            onChange={(date) =>
                                                field.onChange(date)
                                            }
                                            dateFormat="MMMM d, yyyy"
                                            placeholderText="Select a date"
                                            className="input border-0"
                                            required
                                        />
                                    )}
                                />
                                {errors.date && (
                                    <p className="italic text-red-600 mt-[2px] font-normal text-[10px]">
                                        {errors.date.message}
                                    </p>
                                )}
                            </motion.div>
                        </motion.div>

                        {showLocationOptions && (
                            <motion.div
                                className="px-3 py-2"
                                variants={itemVariants}
                            >
                                <motion.div className="relative">
                                    <h1
                                        className={`font-spectral border-black border-2 border-x-0 border-t-0 py-1 text-black mb-2 text-[17px] ${
                                            errors["LocationOption"]
                                                ? "text-red-600"
                                                : ""
                                        }`}
                                    >
                                        Choose an option
                                    </h1>
                                    {/* Location type */}
                                    <motion.div className="flex flex-col gap-y-3 font-Italiana font-light">
                                        <RadioInput
                                            id="Location"
                                            name="LocationOption"
                                            value="Location"
                                            label="Location"
                                            register={register}
                                            onChange={
                                                handleLocationOptionChange
                                            }
                                        />
                                        <RadioInput
                                            id="Blackrose Makeup Studio"
                                            name="LocationOption"
                                            value="Blackrose Makeup Studio"
                                            label="Blackrose Makeup Studio"
                                            register={register}
                                            onChange={
                                                handleLocationOptionChange
                                            }
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}

                        {selectedLocationOption === "Location" && (
                            <div className="px-3 py-2">
                                <InputField
                                    name="SpecificLocation"
                                    type="text"
                                    placeholder="Specific Location (e.g., street address)"
                                    errors={errors}
                                    register={register}
                                />
                            </div>
                        )}

                        {showTrainingOptions && (
                            <motion.div
                                className="px-3 py-2"
                                variants={itemVariants}
                            >
                                <motion.div className="relative">
                                    <h1
                                        className={`font-spectral border-black border-2 border-x-0 border-t-0 py-1 text-black mb-2 text-[17px] ${
                                            errors["TrainingOption"]
                                                ? "text-red-600"
                                                : ""
                                        }`}
                                    >
                                        Training Options
                                    </h1>
                                    <motion.div className="flex flex-col gap-y-3 font-Italiana font-light">
                                        <RadioInput
                                            id="1 on 1 Training"
                                            name="TrainingOption"
                                            value="1 on 1 Training"
                                            label="1 on 1 Training"
                                            register={register}
                                        />
                                        <RadioInput
                                            id="Blackrose Makeup Masterclass"
                                            name="TrainingOption"
                                            value="Blackrose Makeup Masterclass"
                                            label="Blackrose Makeup Masterclass"
                                            register={register}
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}

                        <motion.div
                            className="px-3 py-2"
                            variants={itemVariants}
                        >
                            <textarea
                                {...register("SpecialRequest")}
                                className="input w-full rounded-lg border mt-3 py-3 border-gray-300"
                                placeholder="Additional Notes (optional)"
                                rows="4"
                            ></textarea>
                        </motion.div>
                        <motion.div
                            className="py-2 px-2"
                            variants={itemVariants}
                        >
                            <button
                                className="button py-2 rounded-lg hover:bg-opacity-90"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                <div className=" overflow-hidden">
                    <iframe
                        width="520"
                        height="400"
                        // eslint-disable-next-line react/no-unknown-property
                        frameborder="0"
                        scrolling="no"
                        // eslint-disable-next-line react/no-unknown-property
                        marginheight="0"
                        // eslint-disable-next-line react/no-unknown-property
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Piccadilly%20Idado,%20Idado,%20Lekki,%20Lagos+(Blackrose%20Makeup%20Studio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.gps.ie/">gps tracker sport</a>
                    </iframe>
                </div>
            </motion.div>
        </Layout>
    )
}

// Custom InputField Component
const InputField = ({
    name,
    type,
    placeholder,
    errors,
    register,
    validation,
}) => (
    <div>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name, {
                required: `${name} is required`,
                ...validation,
            })}
            className={`input peer w-full rounded-lg border ${
                errors[name] ? "border-red-600" : "border-gray-300"
            }`}
        />
        {errors[name] && (
            <p className="italic text-red-600 mt-[2px] font-normal text-[10px]">
                {errors[name].message}
            </p>
        )}
    </div>
)

// Custom RadioInput Component
const RadioInput = ({ id, name, value, label, register, onChange }) => (
    <div className="flex items-center gap-x-2">
        <input
            type="radio"
            id={id}
            name={name}
            value={value}
            {...register(name, { required: true })}
            onChange={onChange}
            className="font-Roboto ml-1 text-gray-600 text-[15px]"
        />
        <label
            htmlFor={id}
            className="font-Robot font-semibold ml-1 text-black text-[15px]"
        >
            {label}
        </label>
    </div>
)

export default Contact
