import React from "react";

type CommentContextData = {
    value: string
    onChange: (value: string) => void
}

export const commentContext = React.createContext<CommentContextData>({
    value: "",
    onChange(value: string): void {},
})
