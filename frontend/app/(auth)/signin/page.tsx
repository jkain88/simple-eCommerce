import { OAuth } from '@/components/auth/oauth'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function SignInPage() {
    return (
        <div className=" mx-auto my-auto max-w-2xl xl:w-1/2">
            <Card>
                <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>
                        Choose your preferred sign in method
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <OAuth />
                    <div className="relative flex items-center py-5">
                        <div className="flex-grow border-t border-gray-500"></div>
                        <span className="mx-2 flex-shrink text-xs font-semibold uppercase">
                            Or continue with
                        </span>
                        <div className="flex-grow border-t border-gray-500"></div>
                    </div>
                    <div>
                        <Label className="text-sm" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <Label className="text-sm" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="*******"
                            className="mt-2"
                        />
                    </div>
                    <Button className="mt-4 w-full">Sign in</Button>
                </CardContent>
            </Card>
        </div>
    )
}
