import Typography from '@components/atoms/typography'

const { Title, Text } = Typography

const UnitChallenge = () => {
  return (
    <div className="bg-white h-screen pt-20 px-2">
      <div className="w-full flex flex-col items-start gap-2 mb-6">
        <Title level={5} className="font-normal text-black-400">
          Descrição
        </Title>
        <Text className="text-md text-black-900">
          Lorem ipsum dolor sit amet consectetur. Et odio ullamcorper vel nisl arcu turpis vitae.
          Diam scelerisque quis cras diam nisl nullam egestas adipiscing aliquet.
        </Text>
      </div>
    </div>
  )
}

export default UnitChallenge
