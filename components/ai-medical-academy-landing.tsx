'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, BookOpen, Users, Rocket, Search, ChevronRight, Star, MessageCircle, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Vazirmatn } from 'next/font/google'

const vazirmatn = Vazirmatn({ subsets: ['arabic'] })

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function AiMedicalAcademyLanding() {
  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white ${vazirmatn.className}`} dir="rtl">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Brain className="h-6 w-6 text-blue-600 ml-2" />
            <span className="font-bold">آکادمی هوش مصنوعی و پزشکی</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              خانه
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              دوره‌ها
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              درباره ما
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              تماس با ما
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              وبلاگ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden lg:flex">
              <Input className="w-[300px]" placeholder="جستجوی دوره‌ها..." type="search" />
              <Button type="submit" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <Button variant="outline">ورود</Button>
            <Button>ثبت‌نام</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    آکادمی هوش مصنوعی و پزشکی
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    آموزش‌های حرفه‌ای در حوزه هوش مصنوعی و پزشکی با بهترین مدرسان
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary">مشاهده دوره‌ها</Button>
                  <Button size="lg">ثبت‌نام</Button>
                </div>
              </div>
              <Image
                alt="تصویر هوش مصنوعی و پزشکی"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">درباره ما</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center">
              آکادمی هوش مصنوعی و پزشکی با هدف ارائه آموزش‌های کاربردی و به‌روز در زمینه هوش مصنوعی و کاربردهای آن در علوم پزشکی تاسیس شده است. ما با بهره‌گیری از اساتید مجرب و متخصصان برتر، دانشجویان را برای ورود به دنیای هیجان‌انگیز هوش مصنوعی در پزشکی آماده می‌کنیم.
            </p>
            <div className="mt-8 flex justify-center">
              <Button>بیشتر بدانید</Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">دوره‌های محبوب</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card>
                    <CardContent className="p-4">
                      <Image
                        alt={`تصویر دوره ${i}`}
                        className="aspect-video overflow-hidden rounded-lg object-cover"
                        height="200"
                        src={`/placeholder.svg?height=200&width=300&text=دوره ${i}`}
                        width="300"
                      />
                      <h3 className="mt-2 font-bold">عنوان دوره {i}</h3>
                      <p className="text-sm text-gray-500">توضیح مختصر دوره</p>
                      <Button className="mt-2" variant="outline">مشاهده دوره</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button>مشاهده همه دوره‌ها</Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">محتوای دوره‌های قبلی</h2>
            <Tabs defaultValue="videos" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="videos">ویدئوها</TabsTrigger>
                <TabsTrigger value="articles">مقالات</TabsTrigger>
              </TabsList>
              <TabsContent value="videos">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500">به زودی ویدئوهای آموزشی اضافه خواهند شد</p>
                        </div>
                        <h3 className="mt-2 font-bold">عنوان ویدئو {i}</h3>
                        <p className="text-sm text-gray-500">توضیح مختصر ویدئو</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="articles">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <h3 className="font-bold">عنوان مقاله {i}</h3>
                        <p className="text-sm text-gray-500">مقالات آموزشی به زودی در دسترس قرار خواهند گرفت. منتظر محتوای ارزشمند ما باشید!</p>
                        <Button className="mt-2" variant="link">ادامه مطلب</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-8 flex justify-center">
              <Button>مشاهده بیشتر</Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-pink-50"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">دسته‌بندی دوره‌ها</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {['یادگیری ماشین', 'پردازش زبان طبیعی', 'بینایی کامپیوتر', 'داده‌کاوی پزشکی', 'هوش مصنوعی در تصویربرداری پزشکی', 'سیستم‌های پشتیبان تصمیم‌گیری'].map((category, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card>
                    <CardContent className="p-4 flex items-center">
                      <Brain className="h-6 w-6 text-blue-600 ml-2" />
                      <h3 className="font-bold">{category}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button>مشاهده همه دسته‌بندی‌ها</Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">دیتاست‌های آموزشی و پژوهشی</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center mb-8">
              ما مجموعه‌ای از دیتاست‌های با کیفیت و به‌روز در زمینه هوش مصنوعی و پزشکی را برای استفاده دانشجویان و پژوهشگران فراهم کرده‌ایم.
            </p>
            <div className="flex justify-center">
              <Button>مشاهده دیتاست‌ها</Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-50 to-orange-50"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">نظرات و امتیازدهی</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">نظر کاربر درباره دوره...</p>
                      <p className="mt-2 font-bold">نام کاربر {i}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button>ارسال نظر</Button>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">خبرنامه</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  با ثبت‌نام در خبرنامه، از آخرین اخبار و مقالات هوش مصنوعی و پزشکی باخبر شوید.
                </p>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="ایمیل خود را وارد کنید" type="email" />
                    <Button type="submit">ثبت‌نام</Button>
                  </form>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">ما را دنبال کنید</h2>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
                <Button>اشتراک‌گذاری</Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-bold mb-2">لینک‌های مفید</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">درباره ما</Link></li>
                <li><Link href="#" className="hover:underline">تماس با ما</Link></li>
                <li><Link href="#" className="hover:underline">حریم خصوصی</Link></li>
                <li><Link href="#" className="hover:underline">شرایط استفاده</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">تماس با ما</h3>
              <p>آدرس: تهران، خیابان آزادی، پلاک 123</p>
              <p>تلفن: 021-12345678</p>
              <p>ایمیل: info@aimedicalacademy.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">نماد اعتماد الکترونیکی</h3>
              {/* اینجا می‌توانید تصویر نماد اعتماد الکترونیکی را قرار دهید */}
              <div className="w-16 h-16 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p>© 2023 آکادمی هوش مصنوعی و پزشکی. همه حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 left-4">
        <Button className="rounded-full" size="icon">
          <MessageCircle className="h-4 w-4" />
          <span className="sr-only">پشتیبانی آنلاین</span>
        </Button>
      </div>
    </div>
  )
}