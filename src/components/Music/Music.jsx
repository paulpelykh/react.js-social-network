import React from 'react';
import s from './Music.module.css';
import C418 from '../../../src/assets/music/C418.mp3';
import claude from '../../../src/assets/music/claude.mp3';
import Hamry from '../../../src/assets/music/Hamry.mp3';
import Nujabes from '../../../src/assets/music/Nujabes.mp3';

const Music = () => {
	return (
		<div className={s.music}>
			<div>
				<audio src={C418} controls></audio>
			</div>
			<div>
				<audio src={claude} controls></audio>
			</div>
			<div>
				<audio src={Hamry} controls></audio>
			</div>
			<div>
				<audio src={Nujabes} controls></audio>
			</div>
		</div>
	);
}

export default Music;