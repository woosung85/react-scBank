import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ComponentGuidePage() {
  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">컴포넌트 가이드</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Shadcn UI 컴포넌트 예제와 사용법을 모아놓은 페이지입니다.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Button</h2>
          <div className="flex items-center gap-3 mb-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
            {`import { Button } from '@/components/ui/button'

<Button variant="default">Primary</Button>`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="shadow">
              <CardHeader>
                <CardTitle className="text-lg">Welcome</CardTitle>
                <CardDescription>Sign in to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This is a short card example using Tailwind utilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Get started</Button>
              </CardFooter>
            </Card>

            <Card className="shadow">
              <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                Image/Preview
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Product</CardTitle>
                <CardDescription>Product short description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-green-600">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy</Button>
              </CardFooter>
            </Card>
          </div>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto mt-4">
            {`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Desc</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dialog (Modal)</h2>
          <div className="mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogDescription>This is an example dialog.</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Dialog content goes here.</p>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
            {`import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>...</DialogContent>
</Dialog>`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Form / Input</h2>
          <div className="max-w-md">
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input placeholder="you@example.com" className="mb-3" />
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input placeholder="••••••••" type="password" />
          </div>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto mt-4">
            {`import { Input } from '@/components/ui/input'

<Input placeholder="you@example.com" />`}
          </pre>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/assets/avif-test-image.avif" alt="avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Jane Doe</div>
              <div className="text-sm text-gray-500">Product Manager</div>
            </div>
          </div>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto mt-4">
            {`import { Avatar } from '@/components/ui/avatar'

<Avatar>
  <Avatar.Image src="/path/to/img.jpg" alt="avatar" />
</Avatar>`}
          </pre>
        </section>

        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500">
            사용 예제는 Tailwind 유틸리티 클래스를 함께 사용하여 스타일링 되어 있습니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
