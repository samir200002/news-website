"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NewsCard({ article }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(article.publishedAt);
    setFormattedDate(
      date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, [article.publishedAt]);

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={article.urlToImage || "/assets/news.jpg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {formattedDate}
          </div>
          <h3 className="font-bold leading-tight">
            <Link href={article.url} className="hover:underline">
              {article.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="text-sm text-muted-foreground">
          Source: {article.source?.name || "Unknown"}
        </div>
      </CardFooter>
    </Card>
  );
}
