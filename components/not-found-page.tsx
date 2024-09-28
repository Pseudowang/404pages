'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from 'react'

export function NotFoundPage() {
  const [funnyText, setFunnyText] = useState("")
  
  useEffect(() => {
    const funnyTexts = [
      "哎呀，页面去度假了！",
      "404：页面在玩捉迷藏",
      "这里啥都没有，连404都不想来",
      "页面可能被外星人绑架了",
      "糟糕，页面被贪吃蛇吃掉了！"
    ]
    setFunnyText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)])
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 px-4 text-center">
      <div className="space-y-8 max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 animate-bounce">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-gray-800">
            {funnyText}
          </h2>
          <p className="text-xl text-gray-600">
            页面维护更新ing...提交作业可直接通过微信发送!
          </p>
        </div>
        <div className="w-64 h-64 mx-auto">
          <svg
            className="w-full h-full text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M9 9H9.01M15 9H15.01M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            我知道你很急，但是你先别急！！！
          </p>

        </div>
      </div>
    </div>
  )
}