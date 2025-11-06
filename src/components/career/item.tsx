import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ArrowRightIcon, BriefcaseIcon } from 'lucide-react'
import { type CareerProps } from '@/types'
import { useTranslations } from 'next-intl'
import { institutionIconMap } from '@/data'

export function CareerItem({ link, company, jobs, badges, icon }: CareerProps) {
  const t = useTranslations()
  const IconComponent = icon ? institutionIconMap[icon] : null
  
  return (
    <>
      <div className='absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black' />
      <div className='flex gap-x-2 mb-4 items-center'>
        {IconComponent && (
          <IconComponent className='size-10 w-10 h-10 flex-shrink-0' />
        )}
        <h3 className='text-xl font-bold text-neutral-900 dark:text-neutral-100'>
          {company}
        </h3>
        <Badge variant='secondary' className='shadow rounded-md'>
          {badges}
        </Badge>
      </div>

      {jobs.map((job, index) => (
        <div key={index} className='mb-4'>
          <div className='flex items-center gap-2 mb-1'>
            <h4 className='text-lg font-medium dark:text-neutral-100 text-neutral-900'>
              {job.title}
            </h4>
            {job.isInternship && (
              <Badge 
                variant='outline' 
                className='shadow rounded-md border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400'
              >
                <BriefcaseIcon className='size-3 mr-1' />
                {t('career.internship')}
              </Badge>
            )}
          </div>
          <time className='text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200'>
            {job.start} — {job.end}
          </time>
          <ul className='mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono'>
            {job.description.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
      ))}

      {link && (
        <Button
          variant='default'
          size={null}
          className='shadow mt-4 p-2'
          asChild
        >
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <p className='font-medium'>{t('career.viewMore')}</p>
            <ArrowRightIcon className='ms-2 size-4' />
          </a>
        </Button>
      )}
    </>
  )
}
