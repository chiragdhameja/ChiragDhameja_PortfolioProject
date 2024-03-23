import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '@/typings'

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}

type Props = {
	pageInfo: PageInfo
}

function ContactMe({ pageInfo }: Props) {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:chiragdhameja.ca@gmail.com?subject=${formData.subject}&body=Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
	}
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-16 mob:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-purple-9 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-3 mob:space-y-5 sm:space-y-10 mt-10 sm:mt-0">
				<h4 className="text-lg mob:text-xl sm:text-4xl font-semibold text-center">
					I have got just what you need.{' '}
					<span className="decoration-purple-8 underline">
						Lets Talk!
					</span>
				</h4>

				<div className="space-y-2 mob:space-y-5 w-full">
					<div className="flex items-center space-x-1 sm:space-x-5 justify-center">
						<PhoneIcon className="text-purple-8 h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
						<p className="text-lg sm:text-2xl text-purple-9 font-medium">
							{pageInfo?.phoneNumber}
						</p>
					</div>

					<div className="flex items-center space-x-1 sm:space-x-5 justify-center">
						<EnvelopeIcon className="text-purple-8 h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
						<p className="text-lg sm:text-2xl text-purple-9 font-medium">
							{pageInfo?.email}
						</p>
					</div>

					<div className="flex items-center space-x-1 sm:space-x-5 justify-center">
						<MapPinIcon className="text-purple-8 h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
						<p className="text-lg sm:text-2xl text-purple-9 font-medium">
							{pageInfo.address}
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-1 mob:space-y-2 sm:space-y-2 w-11/12 sm:w-fit mx-auto justify-center"
				>
					<div className="flex flex-col space-y-1 mob:space-y-2 sm:space-y-0 sm:flex-row sm:space-x-1">
						<input
							{...register('name')}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register('email')}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>

					<input
						{...register('subject')}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>

					<textarea
						{...register('message')}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-purple-7/50 py-2 mob:py-4 px-10 rounded-md text-black font-bold text-md"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
