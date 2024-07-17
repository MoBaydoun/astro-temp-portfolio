---
title: "Types ftw!!!"
publishedAt: 2024-06-17
description: "types >>>>>"
slug: "types-ftw"
isPublish: true
---

## The many ways that `type` diffs `interface` heavily; a short blog 🤓

So far we've heard a lot about how both types and interfaces have things going for them. But I am here to say that, actually, everything interfaces have going for them, types have and they do it better.

Generic example of something you can't do purely with interfaces:

```ts
type Success = {
    status: "success";
    data: any;
}

type Error = {
    status: "error";
    message: string;
}

type Result = Success | Error;
```

While you can have a `type` that is a `union` of 2 `interfaces`, this is undesirable as it would introduce both paradigms into a project and bring overall greater uncertainty and inconsistency; especially if you are onboarding newer developers. It doesn't take a genius to tell you that standards are important.

The following is an extension of the previous example with even more `type` magic ✨:

```ts
type Status = "200" | "201" | "400" | "404" | "500";

type BaseResponse<T extends Status> = {
    status: T;
    // Any other field a generic response would have
}

type SuccessfulResponse = BaseResponse<"200" | "201"> & {
    data: any;
}

type ErrorResponse = BaseResponse<"400" | "404" | "500"> & {
    message: string;
}

type Result = SuccessResponse | ErrorResponse;
```

The result of this implementation provides you powerful types that give *meaningful* constraints to its fields. When defining a `SuccessfulResponse` for example, the status field will be constrained to only using successful status codes, or risk facing the wrath of the red squiggly line and the infamous memory dump-like Typescript warning message (iykyk).

You may have also noticed the use of the `&` symbol. Let's take a look at what it does! Let us say we have the following `type` definition:

```ts
type User = {
    id: number;
    name: string;
}
```

I would like to note that the fact it is a `type` and not an `interface` has no bearing on this experiment and both function exactly the same in this scenario.

Now, if we want to extend this `type` to include the `role` field, this is is how we would do it using an `interface` 🤢:

```ts
interface UserWithRole extends User {
    role: string
}
```

Another important note is the fact that `interfaces` can extend both other `interfaces` and `types`. This is awesome because if you're writing some sort of component library or package for example, your decision to adopt a standard of only using `types` does not hinder the extensibility of your app too greatly with (I believe) the only exception being the fact that `interfaces` cannot extend union types. Being that there is no alternative to union types, I would mark this as a strike against interfaces.

This is how you would extend a `type` or an `interface` using what is called an `intersection` (if you are familiar with set theory, the terminology used in `types` makes a lot more sense):

```ts
type UserWithRole = User & {
    role: string
}
```

Another thing to consider is that `interfaces` can only extend one other `interface` while `intersections` can be used to provide the same effect as extending *multiple interfaces or types*:

```ts
type Burger = Meat & Lettuce & Tomato & {
    price: number;
}
```

## In Conclusion

When it comes down to it, `types` simply provide a better developer experience with their flexibility and simple, yet powerful syntax. 

`interfaces` are a product of an olden time, and its very own name dates it. Interfaces are in fact, not the same interfaces that many developers are familiar with from other languages. New developers learn `types` nowadays and using `interfaces` is just plain confusing as no other paradigm refers to interfaces as a container for data.

This all to say, `type` >>>>>>>>>>> `interface`