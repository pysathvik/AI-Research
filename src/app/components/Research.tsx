import React, { useState } from "react";
import { motion } from "motion/react";
import { Section, AnimatedText } from "./Section";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

const usageData = [
  { name: 'High School', percentage: 45 },
  { name: 'Undergrad', percentage: 78 },
  { name: 'Grad Student', percentage: 85 },
  { name: 'Educators', percentage: 32 },
];

const impactData = [
  { name: 'Improves Grades', value: 65, color: '#6366f1' },
  { name: 'No Change', value: 20, color: '#52525b' },
  { name: 'Decreases Learning', value: 15, color: '#f43f5e' },
];

const adoptionOverTime = [
  { year: '2021', students: 10, teachers: 5 },
  { year: '2022', students: 35, teachers: 15 },
  { year: '2023', students: 75, teachers: 45 },
  { year: '2024', students: 92, teachers: 68 },
];

export function Research() {
  const [activeTab, setActiveTab] = useState('adoption');

  return (
    <Section id="research" className="bg-zinc-950">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h3 className="text-blue-400 font-medium mb-4 tracking-wide uppercase text-sm">Data & Insights</h3>
        <AnimatedText 
          text="Research & Surveys" 
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        />
        <p className="text-zinc-400 text-lg">
          Quantitative analysis from universities and educational institutions reveals the true scale of AI integration in academia.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-zinc-900/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {[
              { id: 'adoption', label: 'Adoption Rate' },
              { id: 'usage', label: 'Demographics' },
              { id: 'impact', label: 'Perceived Impact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="bg-black/40 border border-white/5 rounded-3xl p-6 md:p-10 h-[400px] md:h-[500px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={activeTab} // Force re-render animation
        >
          {activeTab === 'adoption' && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adoptionOverTime} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="year" stroke="#71717a" tick={{ fill: '#71717a' }} axisLine={false} tickLine={false} />
                <YAxis stroke="#71717a" tick={{ fill: '#71717a' }} axisLine={false} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                  itemStyle={{ color: '#e4e4e7' }}
                />
                <Legend />
                <Line type="monotone" dataKey="students" name="% of Students Using AI" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#18181b' }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="teachers" name="% of Teachers Using AI" stroke="#a855f7" strokeWidth={3} dot={{ r: 6, fill: '#a855f7', strokeWidth: 2, stroke: '#18181b' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          )}

          {activeTab === 'usage' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" tick={{ fill: '#71717a' }} axisLine={false} tickLine={false} />
                <YAxis stroke="#71717a" tick={{ fill: '#71717a' }} axisLine={false} tickLine={false} />
                <RechartsTooltip 
                  cursor={{ fill: '#27272a', opacity: 0.4 }}
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                />
                <Bar dataKey="percentage" name="% Usage Rate" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={60}>
                  {usageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}

          {activeTab === 'impact' && (
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-10">
              <div className="w-full md:w-1/2 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h4 className="text-xl font-medium mb-4">Student Survey Results (N=5,000)</h4>
                {impactData.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                        <span className="text-sm text-zinc-400">{item.value}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1.5">
                        <motion.div 
                          className="h-1.5 rounded-full" 
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">Source: Educause Horizon Report 2024 & Stanford HAI</p>
        </div>
      </div>
    </Section>
  );
}
