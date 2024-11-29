import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/ui/Navbar"

const SignUpPage = () => {
    return (
        <div className="relative min-h-screen bg-background text-foreground flex flex-col">
            {/* Navbar */}
            <div className="pt-2">
                <Navbar />
            </div>

            <div className="flex items-center justify-center min-h-screen">
                
                <Card className="w-full max-w-sm bg-[var(--card)]">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>
                        Create a new account by filling out the information below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Sign Up</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default SignUpPage
