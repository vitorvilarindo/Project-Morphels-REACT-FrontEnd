function IforParagraf({title, info}) {
    return (
      <p className='flex flex-col items-start text-sm'><strong className='text-neutral-400 text-sm'>{title}</strong> {info}</p>
    );
  }

export default IforParagraf;