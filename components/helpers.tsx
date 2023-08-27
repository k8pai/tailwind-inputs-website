import Link from 'next/link';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import { GiChoice, GiPowerLightning } from 'react-icons/gi';
import { FcAcceptDatabase } from 'react-icons/fc';
import {
	SiFormstack,
	SiReact,
	SiReacthookform,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import {
	TiForm,
	TiText,
	TiMail,
	TiPassword,
	TiButton,
} from '@k8pai/tailwind-inputs';

const Heading = () => {
	return (
		<div className="text-center">
			<h1 className="text-5xl font-extrabold tracking-wide my-16">
				Tailwind inputs
			</h1>
			<p className="text-2xl font-bold tracking-wide capitalize">
				Tailwind configured ready to use components!
			</p>
		</div>
	);
};

const Navigation = () => {
	return (
		<div className="space-x-px flex items-center justify-center my-14">
			<Link href={`/docs/getting-started`} className="text-sky-500">
				Get Started
			</Link>
			<BsDot />
			<Link href={`/docs/getting-started`} className="text-sky-500">
				Docs
			</Link>
			<BsDot />
			<Link href={`/examples`} className="text-sky-500">
				Examples
			</Link>
			<BsDot />
			<Link
				href={`https://github.com/k8pai/tailwind-inputs`}
				className="text-sky-500"
			>
				Github
			</Link>
		</div>
	);
};

const Features = () => {
	const features = [
		{
			Comp: SiReacthookform,
			name: 'State less',
		},
		{
			Comp: SiReact,
			name: 'React.js / Next.js',
		},
		// {
		// 	Comp: GiPowerLightning,
		// 	name: 'Powerful',
		// },
		{
			Comp: SiTailwindcss,
			name: 'Tailwind css',
		},
		{
			Comp: SiTypescript,
			name: 'Typescript Ready',
		},
		{
			Comp: SiReact,
			name: 'Customizable',
		},
		{
			Comp: GiChoice,
			name: 'One Liners',
		},
		{
			Comp: SiFormstack,
			name: 'Form Events',
		},
		{
			Comp: FcAcceptDatabase,
			name: 'Validations',
		},
	];

	return (
		<div className="grid justify-center grid-cols-4 gap-3 mt-10">
			{features.map(({ Comp, name }, _) => {
				return (
					<div
						key={_}
						className="space-x-2 flex items-center p-3 rounded-md"
					>
						<Comp />
						<p className="font-semibold tracking-wide">{name}</p>
					</div>
				);
			})}
		</div>
	);
};

const MyComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm className="w-full bg-transparent" onSubmit={handleSubmit}>
			<TiText
				name={'username'}
				label={'Username'}
				placeholder={'Enter Your Username'}
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
				}}
				validate={'username'}
				error="This is not a valid username!"
				className={'space-y-2'}
			/>
			<TiMail
				name={'mail'}
				label={'E Mail'}
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
				}}
				error="This is not a valid Mail!"
				className={'space-y-2'}
			/>
			<TiPassword
				name={'password'}
				label={'Password'}
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
				}}
				error="This is not a valid Password!"
				className={'space-y-2'}
			/>
			<TiButton
				type={'submit'}
				title={'Submit'}
				className={
					'px-3 py-2 mt-2 rounded-lg text-white bg-gray-500/90'
				}
			/>
		</TiForm>
	);
};

export { Heading, Navigation, MyComponent, Features };
