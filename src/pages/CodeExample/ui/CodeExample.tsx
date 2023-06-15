import { type FC, useState, useEffect } from 'react'
import classes from './styles.module.scss'
import { useParams } from 'react-router'
import { ECodeExamples } from 'app/codeExamples'

const CodeExample: FC = () => {
    const { choosenExample } = useParams() as {choosenExample: ECodeExamples}
    const [iframe, setIframe] = useState<string>('')

    useEffect(() => {
        switch (choosenExample) {
            case ECodeExamples.SMART_DEVICE:
                setIframe(
                    '<iframe className={ classes.iframe } src="/MitraSoftTest/smartDevice/index.html"></iframe>'
                )
                break
            case ECodeExamples.JEVELLERY:
                setIframe(
                    '<iframe className={ classes.iframe } src="/MitraSoftTest/jevellery/index.html"></iframe>'
                )
                break
            case ECodeExamples.EUROPE:
                setIframe(
                    '<iframe className={ classes.iframe } src="/MitraSoftTest/europe/index.html"></iframe>'
                )
                break
            case ECodeExamples.BICYCLE:
                setIframe(
                    '<iframe className={ classes.iframe } src="/MitraSoftTest/bicycle/index.html"></iframe>'
                )
                break
            case ECodeExamples.MISHKA:
                setIframe(
                    '<iframe className={ classes.iframe } src="/MitraSoftTest/mishka/index.html"></iframe>'
                )
                break
        }
    }, [choosenExample])

    return (
        <div
            dangerouslySetInnerHTML={ { __html: iframe } }
            className={ classes.iframeWrapper }
        />
    )
}

export default CodeExample
