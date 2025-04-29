declare module '*.mdx' {
  // MDX에서 export default 로 내보내는 컴포넌트 타입
  const MDXComponent: (props: any) => JSX.Element
  export default MDXComponent

  // frontmatter 메타데이터가 있다면 타입도 선언
  export const meta: Record<string, any>
}
