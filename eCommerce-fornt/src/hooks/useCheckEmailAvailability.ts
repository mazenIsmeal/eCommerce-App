import { useState } from "react";
import axios from "axios";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
    // state => بنعرفي منه حالة الايميل
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TStatus>('idle')

    // state => بنسجل الايميل فيه
    const [enteredEmail, setEnteredEmail] = useState<null | string>(null)

    const checkEmailAvailability = async (email: string) => {
        setEnteredEmail(email)
        setEmailAvailabilityStatus('checking')

        try {
            const response = await axios.get(`/users?email=${email}`)
            if(!response.data.length) {
                setEmailAvailabilityStatus('available')
            } else {
                setEmailAvailabilityStatus('notAvailable')
            }
        } catch (error) {
            setEmailAvailabilityStatus('failed');
            setEnteredEmail(null);
        }
    }

    const resetCheckEmailAvailability = () => {
        setEmailAvailabilityStatus('idle');
        setEnteredEmail(null)
    }

    return {enteredEmail, emailAvailabilityStatus, checkEmailAvailability, resetCheckEmailAvailability}

}

export default useCheckEmailAvailability