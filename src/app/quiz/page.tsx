"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
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
})

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
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
                                <Input placeholder="Name" {...field} />
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
                            <FormLabel>Q1. What is drug abuse?</FormLabel>
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
                            <FormLabel>Q2.Why might someone start using drugs in the first place? </FormLabel>
                            <FormDescription>
                                Test
                            </FormDescription>
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
                            <FormLabel>Q3</FormLabel>
                            <FormDescription>
                                Test
                            </FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an Answer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
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

export default function Quiz() {
    return (
        <div>
            <InputForm />
        </div>
    );
}
