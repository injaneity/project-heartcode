"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"
import { useState } from "react"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    q1: z.string({
        required_error: "Please select an answer"
    }),
    q2: z.string({
        required_error: "Please select an answer"
    }),
    q3: z.string({
        required_error: "Please select an answer"
    }),
    q4: z.string({
        required_error: "Please select an answer"
    }),
    q5: z.string({
        required_error: "Please select an answer"
    }),
})

export default function Quiz() {
    const { toast } = useToast();
    const [score, setCalculateScore] = useState<number>(0);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        if (data.q1 === "3") {
            setCalculateScore((prevScore) => prevScore + 1)
        }
        if (data.q2 === "4") {
            setCalculateScore((prevScore) => prevScore + 1)
        }
        if (data.q3 === "2") {
            setCalculateScore((prevScore) => prevScore + 1)
        }
        if (data.q4 === "3") {
            setCalculateScore((prevScore) => prevScore + 1)
        }
        if (data.q5 === "2") {
            setCalculateScore((prevScore) => prevScore + 1)
        }

        toast({
            title: `Congratulations ${data.username}! You scored ${score}.`,
            description: "Refresh the page to try again."
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="q1"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Q1 What is drug abuse?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an Answer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">Using drugs as prescribed</SelectItem>
                                    <SelectItem value="2">Using drugs for recreational purposes</SelectItem>
                                    <SelectItem value="3">Using drugs in a way that harms your health or violates laws</SelectItem>
                                    <SelectItem value="4">Using drugs for medical treatment only</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="q2"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Q2 Why might someone start using drugs in the first place? </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an Answer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1"> To fit in with peers</SelectItem>
                                    <SelectItem value="2">To cope with stress or trauma</SelectItem>
                                    <SelectItem value="3">To experience pleasure or euphoria</SelectItem>
                                    <SelectItem value="4"> All of the above </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="q3"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Q3 What is the minimum punishment for possession of a controlled drug in Singapore?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an Answer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">Fine only</SelectItem>
                                    <SelectItem value="2">Imprisonment for at least 5 years</SelectItem>
                                    <SelectItem value="3">Imprisonment for at least 10 years</SelectItem>
                                    <SelectItem value="4">Community service</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="q4"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Q4 Which of the following is a major factor in preventing drug abuse in young people?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an Answer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">Increased availability of drugs </SelectItem>
                                    <SelectItem value="2">Peer pressure and lack of awareness</SelectItem>
                                    <SelectItem value="3">Strong family support and education about risks</SelectItem>
                                    <SelectItem value="4">Legalizing certain drugs for recreational use</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="q5"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Q5 Which of the following is a common sign that someone may be struggling with drug abuse?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an Answer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">Increased focus and productivity</SelectItem>
                                    <SelectItem value="2">Sudden changes in behavior, mood swings, and neglect of responsibilities</SelectItem>
                                    <SelectItem value="3">Increased energy and positive outlook</SelectItem>
                                    <SelectItem value="4">Improved physical health and appearance</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}