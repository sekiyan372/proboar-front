interface Article {
  id: number
  artist?: string
  band?: string
}

type Post = (params: any) => void
type Delete = (params: number) => void
type ResetStringState = () => void
type AsyncFC = () => Promise<void>
